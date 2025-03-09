import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
const db = getFirestore(app);

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

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

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        {user ? (
          <>
            <h2 className="text-2xl font-bold text-center">Welcome, {name}!</h2>
            <div className="flex flex-col items-center mt-4">
              <img
                src={photoURL}
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-purple-500"
              />
              <div className="mt-4 w-full text-center">
                <p className="text-gray-600">
                  <span className="font-medium">Name:</span> {name}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> {user.email}
                </p>
                <p className="text-gray-600 truncate">
                  <span className="font-medium">Photo URL:</span> {photoURL}
                </p>
              </div>
              <Link
                to="/updateprofile"
                className="mt-5 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
              >
                Update Profile
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-red-500">Please log in</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
