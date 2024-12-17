import React from "react";

import ChatBotImg from "./bot.png";

function Chatbot(){
  return (
    <>
      <div
        style={{
          backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
        }}
        className="h-screen flex justify-center items-center"
      >
        <div className="flex h-[70vh] w-[800px] mb-20 items-center justify-center">
          <div className="flex-1 p-5">
            <iframe
              className="w-[450px] h-[500px] rounded-2xl"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/db7483ef-394e-4313-a028-56e8399f6ca2"
              title="Dialogflow Chat"
            ></iframe>
          </div>
          <div className="flex-1 p-5 flex justify-center items-center">
            <img
              src={ChatBotImg}
              alt="Sample"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
