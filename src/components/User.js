import PropTypes from "prop-types";

function user({ name, surname, age, isLoggedIn, friends, adress }) {
  return (
    <>
      <h1>
        {" "}
        {isLoggedIn
          ? ` Hoşgeldiniz  ${name} ${surname} ${age}  `
          : "Giriş yapmadınız"}
      </h1>
      <br />
      {friends &&
        friends.map((friend) => <div key={friend.id}> {friend.name} </div>)}
    </>
  );
}

user.propTypes = {
  name: PropTypes.string,
  surname: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  friends: PropTypes.array,
};

export default user;

// state nasıl kullanılır
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("Kantar");
//   const [age, setAge] = useState(25);
//   const [friends, setFriends] = useState(["Feyza", "Cem "]);
//   const [adress, setAdress] = useState({
//     title: "İzmir",
//     zip: 35756,
//   });
//   const [counter, setCounter] = useState(0);
//   const [form, setForm] = useState({ name: "", surname: " " });
//   const onChangeInput = (e) => {
//     console.log(e.target.name);
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="App">
//       <h1>Merhaba {name}! </h1>
//       <h2>{age} </h2>
//       <button onClick={() => setName("Onur")}> İsmi Değiştir </button>
//       <button onClick={() => setAge("26")}> Yaşı Değiştir </button>
//       <hr />
//       <h2>
//         {friends.map((friend, index) => (
//           <div key={index}>{friend}</div>
//         ))}
//       </h2>
//       <br />
//       <button onClick={() => setFriends([...friends, "Mestan"])}>
//         {" "}
//         Arkadaş ekle{" "}
//       </button>
//       <br />
//       <h2>
//         {" "}
//         {adress.title} {adress.zip}{" "}
//       </h2>
//       <button
//         onClick={() =>
//           setAdress({
//             title: "Tam35 İzmir  ",
//             zip: 353535,
//           })
//         }
//       >
//         {" "}
//         Obje Değiştir{" "}
//       </button>
//       <hr />
//       <h2> {counter} </h2>
//       <button onClick={() => setCounter(counter + 1)}> İncrease </button>
//       <button onClick={() => setCounter(counter - 1)}> Decrase </button>
//       <hr />
//       Name <br />
//       <input name="name" value={form.name} onChange={onChangeInput} /> <br />
//       Surname
//       <br />
//       <input name="surname" value={form.surname} onChange={onChangeInput} />
//       <br />
//       <br />
//       <h1>
//         {" "}
//         {form.name} {form.surname}
//       </h1>
//     </div>
//   );
// }

// export default App;
//
