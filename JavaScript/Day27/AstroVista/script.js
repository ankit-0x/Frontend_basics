// Zodiac signs array
const zodiacSigns = [
  "Aries",
  "Taurus",
  "Gemini",
  "Cancer",
  "Leo",
  "Virgo",
  "Libra",
  "Scorpio",
  "Sagittarius",
  "Capricorn",
  "Aquarius",
  "Pisces",
];

// Compliments array (30 items)
const compliments = [
  "You radiate positivity and warmth.",
  "Your energy inspires everyone around you.",
  "You have a heart full of kindness.",
  "Your creativity shines brightly.",
  "You are naturally charismatic and charming.",
  "Your presence brings joy to others.",
  "You have an amazing sense of humor.",
  "Your empathy is your strength.",
  "You make people feel valued.",
  "Your optimism is contagious.",
  "You are courageous and brave.",
  "You bring light into dark moments.",
  "Your ideas are innovative and unique.",
  "You are patient and understanding.",
  "Your dedication is inspiring.",
  "You are a natural leader.",
  "Your confidence motivates others.",
  "You are generous and giving.",
  "Your smile brightens the day.",
  "You are a source of comfort to others.",
  "Your mind is sharp and insightful.",
  "You are talented in many ways.",
  "Your resilience is admirable.",
  "You have a calming presence.",
  "Your curiosity leads to great discoveries.",
  "You are graceful and elegant.",
  "Your passion is inspiring.",
  "You are thoughtful and considerate.",
  "You make meaningful connections easily.",
  "Your positivity attracts good things.",
];

// Victim card compliments array (30 items)
const victimCardCompliments = [
  "Even in tough times, you show resilience.",
  "Your perseverance is admirable.",
  "You turn challenges into opportunities.",
  "Your strength inspires those around you.",
  "You always find a way forward.",
  "You learn and grow from adversity.",
  "Your courage is remarkable.",
  "You face hardships with grace.",
  "Your patience is admirable.",
  "You inspire hope in others.",
  "You overcome obstacles with wisdom.",
  "Your determination is unwavering.",
  "You rise above difficulties.",
  "Your resilience brings strength to others.",
  "You find light in dark times.",
  "You inspire others through your actions.",
  "Your adaptability is amazing.",
  "You are brave in the face of challenges.",
  "You show strength even when it’s hard to do so.",
  "Your spirit cannot be broken.",
  "You are an example of courage for those around you.",
  "You handle adversity with dignity.",
  "Your perseverance lights the way for others.",
  "You have an unshakable inner strength.",
  "Your growth from challenges is inspiring.",
  "You meet difficulties with wisdom and courage.",
  "Your resilience is a quiet superpower.",
  "You turn setbacks into stepping stones.",
  "Your courage shines brightest in tough times.",
  "You inspire others to never give up.",
];

// Recommendations array (30 items)
const recommendations = [
  "Spend time in nature to recharge.",
  "Meditation will help you stay centered.",
  "Focus on self-care and personal growth.",
  "Connect with loved ones for emotional support.",
  "Try new hobbies to spark your creativity.",
  "Set small goals to stay motivated.",
  "Practice mindfulness daily.",
  "Take breaks when you feel overwhelmed.",
  "Seek guidance from mentors.",
  "Stay open to new experiences.",
  "Engage in physical activity regularly.",
  "Write down your thoughts in a journal.",
  "Learn something new every day.",
  "Spend quality time with family and friends.",
  "Be kind to yourself.",
  "Reflect on your achievements.",
  "Keep a positive mindset.",
  "Challenge yourself to grow.",
  "Stay curious and explore.",
  "Take time for relaxation.",
  "Eat healthily and drink plenty of water.",
  "Prioritize sleep and rest.",
  "Celebrate small victories.",
  "Be consistent in your efforts.",
  "Seek inspiration from others.",
  "Stay true to your values.",
  "Practice gratitude daily.",
  "Avoid negative influences.",
  "Embrace change with courage.",
  "Take time to reflect on your purpose.",
];

// Predictions array (30 items)
const predictions = [
  "A new opportunity will come your way soon.",
  "Your intuition will guide you to the right path.",
  "Positive changes are on the horizon.",
  "You will meet someone who inspires you.",
  "Success in your endeavors is imminent.",
  "A surprise gift or gesture is coming your way.",
  "You will find clarity in a current situation.",
  "An unexpected encounter will bring joy.",
  "You will make progress in personal goals.",
  "A challenge will reveal your strength.",
  "You will reconnect with an old friend.",
  "Financial gains are in your future.",
  "You will discover hidden talents.",
  "A pleasant journey is ahead.",
  "Your creative ideas will be recognized.",
  "You will overcome obstacles smoothly.",
  "New learning opportunities will arise.",
  "You will inspire others with your actions.",
  "A positive shift in energy will occur.",
  "You will achieve a personal milestone.",
  "Good news will come from afar.",
  "Your hard work will soon pay off.",
  "You will gain new insights about yourself.",
  "A romantic encounter may brighten your day.",
  "You will receive guidance from an unexpected source.",
  "Your efforts will lead to recognition.",
  "You will find peace in a busy schedule.",
  "A creative project will flourish.",
  "You will experience a moment of clarity.",
  "Joyful surprises will fill your week.",
];

function getZodiacSign(day, month) {
  const zodiac = [
    ["Capricorn", 19],
    ["Aquarius", 18],
    ["Pisces", 20],
    ["Aries", 19],
    ["Taurus", 20],
    ["Gemini", 20],
    ["Cancer", 22],
    ["Leo", 22],
    ["Virgo", 22],
    ["Libra", 22],
    ["Scorpio", 21],
    ["Sagittarius", 21],
    ["Capricorn", 31],
  ];

  return day > zodiac[month - 1][1] ? zodiac[month][0] : zodiac[month - 1][0];
}

const form = document.getElementById("astroForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const element = event.target;

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const day = Number(document.getElementById("day").value);
  const month = Number(document.getElementById("month").value);
  const year = Number(document.getElementById("year").value);
  
   if (!fname || !lname || !day || !month || !year) {
    alert("Please fill all fields correctly");
    return;
  }

  const first_msg = `Hello ${fname} ${lname} `;
  const second_msg = `Your Zodiac Sign is ${getZodiacSign(day, month)}`;
  const third_msg = compliments[(day - 1)%30];
  const fourth_msg =
    victimCardCompliments[
      Math.floor(Math.random() * victimCardCompliments.length)
    ];
  const fifth_msg = recommendations[(fname.length * lname.length * year) % 30];
  const sixth_msg = predictions[(day * month * year) % 30];

  const result = document.getElementById("result");
  result.innerText = `${first_msg} ${second_msg} ${third_msg} ${fourth_msg} ${fifth_msg} ${sixth_msg}`;
});
