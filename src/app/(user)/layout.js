import Navbar from "@/components/organisms/Navbar";

export const metadata = {
  title: { default: "Luxury Rent Car", template: "%s" },
  description: "Luxury rent car",
};

function UserLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default UserLayout;
