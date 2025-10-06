export default function UserPage() {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Welcome to Your Dashboard</h2>
        <p className="text-gray-600">
          This is your personal dashboard. Here you can manage your account, view your activity, and access various features.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-3">My Profile</h3>
          <div className="space-y-2">
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john@example.com</p>
            <p><strong>Member since:</strong> January 2024</p>
          </div>
          <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded hover:bg-primary/80 transition-colors">
            Edit Profile
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-3">Recent Activity</h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">• Updated profile picture</p>
            <p className="text-sm text-gray-600">• Changed password</p>
            <p className="text-sm text-gray-600">• Logged in from new device</p>
          </div>
        </div>
      </div>
    </div>
  );
}