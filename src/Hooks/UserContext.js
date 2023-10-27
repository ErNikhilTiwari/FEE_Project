import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("teacher");
  const [userType, setUserType] = useState("");
  const [paper, setPaper] = useState("");
  const [paperList, setPaperList] = useState([]);
  const [notes, setNotes] = useState([]);
  const [noteId, setNoteId] = useState("");
  const [message, setMessage] = useState("");

  const slowLoadingIndicator = () => {
    setTimeout(() => {
      setMessage(
        ""
      );
    }, 2000);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userType,
        setUserType,
        paper,
        setPaper,
        paperList,
        setPaperList,
        notes,
        setNotes,
        noteId,
        setNoteId,
        message,
        setMessage,
        slowLoadingIndicator,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
