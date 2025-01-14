import { UsersCard } from "./templates/users/cardUsers";
function App() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <UsersCard
        fullname="youness"
        age={43}
        image="https://i.scdn.co/image/ab67616d0000b273034be8e1ee0d8296ec43f923"
        donutInial={93}
      />
      <UsersCard
        fullname="Bart Simpson"
        age={19}
        image="https://www.muralsticker.com/33633-thickbox/vinyle-et-autocollants-bart-simpson.jpg"
        donutInial={10}
      />
    </div>
  );
}

export default App;
