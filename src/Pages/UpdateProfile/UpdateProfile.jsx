import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
const db = getFirestore(app);

// Create a constant toast ID to prevent duplicates
const PROFILE_UPDATE_SUCCESS = "profile-update-success";
const PROFILE_UPDATE_ERROR = "profile-update-error";

const UpdateProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName || "");
        setPhotoURL(currentUser.photoURL || "");
       
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setName(userDoc.data().name || "");
          setPhotoURL(userDoc.data().photoURL || "");
        }
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleUpdate = async () => {
    // Prevent multiple clicks/submissions
    if (isUpdating || !user) return;
    
    setIsUpdating(true);
    
    try {
      await updateProfile(user, { displayName: name, photoURL });
      
      // Clear any existing toasts with these IDs
      toast.dismiss(PROFILE_UPDATE_SUCCESS);
      toast.dismiss(PROFILE_UPDATE_ERROR);
      
      // Use a consistent ID to prevent duplicates
      toast.success("Profile updated!", {
        toastId: PROFILE_UPDATE_SUCCESS,
        autoClose: 2000
      });
      
      // Add a small delay before navigation to ensure toast is shown
      setTimeout(() => {
        navigate("/dashboard");
      }, 300);
    } catch (error) {
      console.error("Error updating profile:", error);
      
      toast.dismiss(PROFILE_UPDATE_ERROR);
      toast.error("Failed to update profile. Please try again.", {
        toastId: PROFILE_UPDATE_ERROR
      });
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-semibold text-center">User Dashboard</h2>
      {user ? (
        <div className="mt-4 text-center">
          <img 
            src={photoURL || "https://via.placeholder.com/80"} 
            alt="Profile" 
            className="w-20 h-20 rounded-full mx-auto object-cover" 
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/80";
            }}
          />
          <p className="mt-2 text-lg font-medium">{user.email}</p>
          <input
            type="text"
            className="mt-3 w-full p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <input
            type="text"
            className="mt-3 w-full p-2 border rounded"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter Photo URL"
          />
          <button
            className={`mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 ${
              isUpdating ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={handleUpdate}
            disabled={isUpdating}
          >
            {isUpdating ? "Updating..." : "Update Profile"}
          </button>
        </div>
      ) : (
        <p className="text-center text-red-500">Please log in</p>
      )}
    </div>
  );
};

export default UpdateProfile;