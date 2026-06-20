const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const generateItinerary = async (req, res) => {
  try {
    const { destination, budget, travelers, days } = req.body;

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `
Create a detailed ${days}-day travel itinerary.

Destination: ${destination}
Budget: ₹${budget}
Travelers: ${travelers}

Give:
- Day wise plan
- Morning, afternoon, evening activities
- Tourist attractions
- Food recommendations
- Budget-friendly suggestions
`,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });

    const itinerary = completion.choices[0].message.content;

    res.status(200).json({
      itinerary,
    });
  } catch (error) {
    console.error("Groq Error:", error);

    res.status(500).json({
      message: "AI Generation Failed",
    });
  }
};

module.exports = {
  generateItinerary,
};
