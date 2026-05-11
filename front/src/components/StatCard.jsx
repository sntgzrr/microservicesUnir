export function StatCard({ icon, title, value, color }) {
  return (
    <div className={`${color} rounded-lg shadow-md p-6 text-center border-2 border-opacity-50`}>
      <div className="text-4xl mb-2">{icon}</div>
      <p className="text-gray-600 text-sm font-semibold mb-1">{title}</p>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
}
