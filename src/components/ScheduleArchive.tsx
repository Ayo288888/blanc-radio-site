"use client"

export default function ScheduleArchive() {
  const scheduleItems = [
    { time: "7:00AM–9:00AM", show: "Morning Vibes", color: "text-blue-600" },
    { time: "9:00AM–11:00AM", show: "Urban Drive", color: "text-blue-600" },
    { time: "12:00PM–2:00PM", show: "Midday Recharge", color: "text-blue-600" },
    { time: "2:00PM–4:00PM", show: "Hot Mic", color: "text-blue-600" },
    { time: "4:00PM–6:00PM", show: "Sport Tori", color: "text-blue-600" },
    { time: "6:00PM–8:00PM", show: "The Underground", color: "text-blue-600" },
    { time: "8:00PM–11:00PM", show: "This Week on Air", color: "text-blue-600" },
  ]

  const archiveItems = [
    {
      year: "1356",
      event:
        "Battle of Poitiers – An English army led by Edward the Black Prince defeats a French army and captures King John II.",
    },
    {
      year: "1777",
      event:
        "During the American Revolutionary War, the First Battle of Saratoga (also called Battle of Freeman's Farm) begins with a three-column attack by British General Burgoyne.",
    },
    {
      year: "1796",
      event:
        "George Washington's Farewell Address is published, in which he urges the United States to avoid permanent alliances and dissolve national unity.",
    },
    {
      year: "1796",
      event:
        "George Washington's Farewell Address is published, in which he urges the United States to avoid permanent alliances and dissolve national unity.",
    },
    {
      year: "1893",
      event:
        "New Zealand becomes the first self-governing country to grant women the right to vote in national elections.",
    },
  ]

  return (
    <section className="py-12 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Today's Schedule */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Today's Schedule</h3>
            <div className="space-y-3">
              {scheduleItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center pb-3 border-b border-gray-200 hover:bg-gray-100 px-2 py-1 rounded transition-colors"
                >
                  <span className="text-sm text-gray-600">{item.time}</span>
                  <span className={`font-semibold ${item.color}`}>{item.show}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Today In The Archives */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Today In The Archives</h3>
            <div className="space-y-4">
              {archiveItems.map((item, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-blue-600 pl-4 py-2 hover:bg-gray-100 rounded px-2 transition-colors cursor-pointer"
                >
                  <p className="text-sm font-semibold text-gray-800">{item.year}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
