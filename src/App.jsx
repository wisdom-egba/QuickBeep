import React from "react";
import ChatList from "./components/ChatList";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import NotFoundPage from "./components/NotFound";
import ChatPage from "./components/ChatPage";
import MainLayout from "./layout/MainLayout";
import ChatLayout from "./layout/ChatLayout";
function App() {
  const addMessage = async (newMessage) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });
    return;
  };

  //Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/message/${id}`, {
      method: "DELETE",
    });
    return;
  };

  //Route setup
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ChatList />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>

        <Route path="/chat" element={<ChatLayout />}>
          <Route
            path="/chat/message"
            element={
              <ChatPage deleteJob={deleteJob} addMessageSubmit={addMessage} />
            }
          />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
