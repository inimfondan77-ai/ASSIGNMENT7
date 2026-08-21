function App() {
  const students = [
    { name: "Inimfon", score: 85 },
    { name: "Ekaette", score: 50 },
    { name: "Believe", score: 75 },
    { name: "David", score: 92 },
    { name: "Ninhie", score: 40 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Student's Names and their Scores
        </h1>

        <div className="space-y-3">
          {students.map((student) => (
            <p
              key={student.name}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg text-lg"
            >
              <span className="font-medium text-gray-700">{student.name}</span>

              <span
                className={
                  student.score > 70
                    ? "text-green-600 font-bold"
                    : "text-black-600 font-bold"
                }
              >
                {student.score}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
