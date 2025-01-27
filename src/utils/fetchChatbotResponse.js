export async function fetchChatbotResponse(input, userId) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/chat`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, message: input }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch response from the server.");
    }

    const data = await response.json();
    console.log("Parsed Response Data:", data);

    return data.response.join("\n");
  } catch (error) {
    console.error("Error fetching chatbot response:", error);
    return "Sorry, I encountered an error while trying to assist you.";
  }
}
