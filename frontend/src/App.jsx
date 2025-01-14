import { UsersCard } from "./templates/users/cardUsers";

function App() {
  return (
    <div>
      <UsersCard
        fullname="youness"
        age={19}
        image="https://avatars.githubusercontent.com/u/122360401?v=4"
      />
      <UsersCard
        fullname="Mattéo"
        age={19}
        image="https://avatars.githubusercontent.com/u/146728526?v=4"
      />
    </div>
  );
}

export default App;
