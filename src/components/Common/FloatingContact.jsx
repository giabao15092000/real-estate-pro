import React, { useState } from "react";

const FloatingContact = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: `Welcome to REALESTATEPRO VIETNAM CO., LTD
Address: 123 Nguyen Hue Street, Ben Nghe Ward, District 1, HCMC
Phone: 0961542616 | Email: quocanh82209@gmail.com
How can I help you today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const [suggestionMode, setSuggestionMode] = useState("full");
  // full = hiển thị đầy đủ, small = 1/4

  // Suggest questions
  const suggestions = [
    "What is the price range?",
    "Do you have apartments in District 7?",
    "What property types are available?",
    "How about legal documents?",
    "Can I get a bank loan?",
    "Are there any promotions?",
    "Is this a good investment?",
    "Do you offer rentals?",
    "What amenities are included?",
    "Are there schools nearby?",
    "How about transportation?",
    "What’s the project status?",
    "When is the handover?",
    "How much are maintenance fees?",
    "How can I contact support?",
  ];

  // Answers data
  const qaData = {
    "what is the price range?":
      "Prices typically range from $50,000 to $500,000 depending on location and property type.",
    "do you have apartments in district 7?":
      "Yes, we have multiple projects in District 7, including riverside apartments and condos.",
    "what property types are available?":
      "We offer apartments, houses, villas, townhouses, and office spaces.",
    "how about legal documents?":
      "All properties come with full legal ownership certificates (red book/ pink book).",
    "can i get a bank loan?":
      "Yes, we cooperate with top banks to provide loans up to 70% of the property value.",
    "are there any promotions?":
      "We currently offer discounts up to 5% and free interior packages for early customers.",
    "is this a good investment?":
      "Our projects are located in high-growth areas, ensuring strong returns on investment.",
    "do you offer rentals?":
      "Yes, we offer apartments and houses for rent in many districts of HCMC.",
    "what amenities are included?":
      "Most projects include swimming pools, gyms, shopping malls, and green parks.",
    "are there schools nearby?":
      "Yes, there are international and local schools within 5-10 minutes.",
    "how about transportation?":
      "The properties are near main roads and metro stations for easy commuting.",
    "what’s the project status?":
      "Ongoing projects are in construction stage and will be ready as scheduled.",
    "when is the handover?":
      "Expected handover is Q4 2025 for most apartments.",
    "how much are maintenance fees?":
      "Maintenance fees are around $0.8 - $1 per sqm per month.",
    "how can i contact support?":
      "You can call 0961542616 or email quocanh82209@gmail.com for direct support.",
  };

  const handleSend = (textFromSuggestion = "") => {
    const userInput = textFromSuggestion || input;
    if (!userInput.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);

    // Bot response
    const lower = userInput.toLowerCase();
    const answer =
      qaData[lower] ||
      "Thank you for your question. Our team will contact you soon!";
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: answer }]);
      setSuggestionMode("full"); // sau khi bot trả lời thì show lại full
    }, 500);

    setInput("");
    setSuggestionMode("small"); // khi user gửi thì thu nhỏ lại
  };

  // Floating buttons (WhatsApp / Messenger / Call)
  const handleWhatsApp = () =>
    window.open("https://wa.me/84961542616", "_blank");
  const handleMessenger = () =>
    window.open("https://m.me/realestatepro", "_blank");
  const handleCall = () => window.open("tel:0961542616");

  return (
    <div className="floating-contact fixed bottom-5 right-5 flex flex-col space-y-3 z-50">
      {/* Floating Buttons */}
      {!showChat && (
        <>
          <button
            onClick={handleWhatsApp}
            className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
            title="Chat WhatsApp"
          >
            <i className="fab fa-whatsapp text-xl"></i>
          </button>
          <button
            onClick={handleMessenger}
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
            title="Chat Messenger"
          >
            <i className="fab fa-facebook-messenger text-xl"></i>
          </button>
          <button
            onClick={handleCall}
            className="bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-colors"
            title="Call Now"
          >
            <i className="fas fa-phone text-xl"></i>
          </button>
          <button
            onClick={() => setShowChat(true)}
            className="bg-yellow-400 text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors"
            title="Chat with AI"
          >
            <i className="fas fa-robot text-xl"></i>
          </button>
        </>
      )}

      {/* Chat Window */}
      {showChat && (
        <div className="w-80 h-96 bg-white rounded-2xl shadow-xl flex flex-col border border-red-400 z-[9999]">
          {/* Header with Close Button */}
          <div className="bg-red-600 text-white p-3 flex justify-between items-center rounded-t-2xl">
            <span className="font-semibold">AI Chat Assistant</span>
            <button
              onClick={() => setShowChat(false)}
              className="text-white hover:text-gray-200"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-yellow-100 text-gray-800 self-end ml-auto"
                    : "bg-gray-100 text-gray-700 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Suggestions */}
          <div
            className={`overflow-y-auto transition-all duration-500 border-t p-2 ${
              suggestionMode === "full" ? "h-32" : "h-20"
            }`}
          >
            <div className="flex flex-wrap gap-2">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(s)}
                  className="bg-yellow-100 text-gray-800 text-xs px-2 py-1 rounded-full hover:bg-red-300 transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-2 border-t flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 border rounded-full px-3 py-1 text-sm focus:outline-none"
            />
            <button
              onClick={() => handleSend()}
              className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-yellow-500 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingContact;
