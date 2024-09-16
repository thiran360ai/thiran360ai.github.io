import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Chat.css"; // Import the CSS file

const Chat = ({ closeChat }) => {
  const [step, setStep] = useState(0);
  const [chatMessages, setChatMessages] = useState([
    { type: "ai", text: "I am happy to welcome you to Thiran360AI as a Thiran Assistant. What is your name?" },
  ]);
  const [userResponse, setUserResponse] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [jsonData, setJsonData] = useState({});
  const [file, setFile] = useState(null);
  const [showFileInput, setShowFileInput] = useState(false);
  const [showRoleOptions, setShowRoleOptions] = useState(true);
  const [showThankYou, setShowThankYou] = useState(false);

  const chatBoxRef = useRef(null);

  const updateJsonData = (key, value) => {
    setJsonData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleNextStep = () => {
    switch (step) {
      case 0:
        setName(userResponse);
        updateJsonData("name", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          {
            type: "ai",
            text: `Nice to meet you, ${userResponse}. Are you a Client or a Developer?`,
            roleOptions: true,
          },
        ]);
        setUserResponse("");
        setStep(1);
        break;

      case 1:
        if (role) {
          updateJsonData("role", role);
          setChatMessages((prevMessages) => [
            ...prevMessages,
            { type: "user", text: `I'm a ${role}` },
            {
              type: "ai",
              text: role === "Developer" ? "Please introduce yourself." : "Please provide your company name.",
            },
          ]);
          setStep(role === "Developer" ? 2 : 3);
          setShowRoleOptions(false);
        }
        break;

      case 2:
        updateJsonData("introduction", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          { type: "ai", text: "Would you like to upload your resume? You can choose to skip this step." },
        ]);
        setUserResponse("");
        setStep(4);
        break;

      case 3:
        updateJsonData("companyName", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          { type: "ai", text: "Please provide your company website URL or any other social media URL." },
        ]);
        setUserResponse("");
        setStep(5);
        break;

      case 4:
        updateJsonData("resume", file ? file.name : "Skipped file upload");
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: file ? file.name : "Skipped file upload" },
          { type: "ai", text: "What are your skills?" },
        ]);
        setShowFileInput(false);
        setStep(6);
        break;

      case 5:
        updateJsonData("companyWebsite", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          { type: "ai", text: "Please describe your need." },
        ]);
        setUserResponse("");
        setStep(7);
        break;

      case 6:
        updateJsonData("skills", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          { type: "ai", text: "What are your career goals?" },
        ]);
        setUserResponse("");
        setStep(8);
        break;

      case 7:
        updateJsonData("description", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          { type: "ai", text: "Please upload any relevant documents." },
        ]);
        setUserResponse("");
        setStep(9);
        break;

      case 8:
        updateJsonData("careerGoals", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          { type: "ai", text: "Thank you! We've noted your skills." },
        ]);
        setUserResponse("");
        setStep(10);
        break;

      case 9:
        updateJsonData("documentUpload", file ? file.name : "Skipped file upload");
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: file ? file.name : "Skipped file upload" },
          { type: "ai", text: "Thanks for contacting." },
        ]);
        setStep(11);
        break;

      case 10:
        updateJsonData("contactDetails", userResponse);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          { type: "user", text: userResponse },
          { type: "ai", text: "Thank you for chatting with us! We will be in touch soon." },
        ]);
        setShowThankYou(true);
        setTimeout(() => {
          setShowThankYou(false);
          closeChat(); // Automatically close the chat
        }, 3000); // 3 seconds delay
        break;

      default:
        break;
    }
  };

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    handleNextStep();
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && step !== 4 && step !== 9) {
      handleNextStep();
    }
  };

  const handleShowFileInput = () => {
    setShowFileInput(true);
  };

  const handleSkipFile = () => {
    setFile(null);
    handleNextStep();
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatMessages]);

  return (
    <div className="chat-modal">
      {showThankYou ? (
        <div className="thank-you-card">
          <div className="thank-you-message">
            <span>Thank you for chatting with us! We will be in touch soon.</span>
          </div>
        </div>
      ) : (
        <>
          <div className="chat-header">
            <div className="chat-logo">
              <img src="https://t4.ftcdn.net/jpg/05/88/95/25/240_F_588952520_7AzwyRgAF2EqyWxDbDbGmM0ssPwgrogb.jpg" alt="Chat Logo" />
              <span className="chat-title">Chat with Thiran Assistant</span>
            </div>
            <button className="close-button" onClick={closeChat}>
              &times;
            </button>
          </div>
          <div id="chat-box" className="chat-box" ref={chatBoxRef}>
            {chatMessages.map((message, index) => (
              <div key={index} className={`chat-message ${message.type}`}>
                <span>{message.text}</span>
                {message.roleOptions && showRoleOptions && (
                  <div className="role-options">
                    <button className="btn btn-primary" onClick={() => handleRoleSelect("Client")}>
                      I'm a Client
                    </button>
                    <button className="btn btn-secondary ms-2" onClick={() => handleRoleSelect("Developer")}>
                      I'm a Developer
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          {(step === 4 || step === 9) && (
            <div className="file-upload-container">
              {!showFileInput ? (
                <div className="role-options">
                  <button className="btn btn-primary" onClick={handleShowFileInput}>
                    Choose File
                  </button>
                  <button className="btn btn-secondary ms-2" onClick={handleSkipFile}>
                    Skip
                  </button>
                </div>
              ) : (
                <div className="file-upload-input">
                  <input type="file" className="form-control" onChange={handleFileChange} />
                  <button className="btn btn-primary mt-2" onClick={handleNextStep}>
                    Upload and Continue
                  </button>
                </div>
              )}
            </div>
          )}
          {step !== 4 && step !== 9 && (
            <div className="input-container">
              <input
                type="text"
                className="form-control"
                placeholder="Type your message here..."
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button className="btn btn-primary" onClick={handleNextStep}>
                Send
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Chat;
