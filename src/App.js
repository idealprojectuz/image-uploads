import React from "react";
function App() {
  const [data, setValues] = React.useState({
    firstname: "",
    lastname: "",
    age: null,
    password: "",
    phone: "",
    t_username: "",
    field_id: null,
    jinsi: 0,
    image: null,
  });
  const setdata = (e) => {
    setValues((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const submission = (e) => {
    e.preventDefault();

    let formdata = new FormData();
    for (const event in data) {
      formdata.append(event, data[event]);
    }
    const option = {
      method: "POST",
      headers: {
        Authorization:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsInJvbGUiOiJhZG1pbmlzdHJhdG9yIiwiaWF0IjoxNjg4MTMyMjQyLCJleHAiOjE2ODgyMTg2NDJ9.J1LAYoAFq7XHhBdNuOkstsizO9htgeR-Br84ytWRwb0",
      },
      body: formdata,
      redirect: "follow",
    };
    fetch("http://localhost:8000/api/assistants/create", option)
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <form onSubmit={submission}>
        <label>firstname</label>
        <input
          type="text"
          defaultValue={data.firstname}
          onChange={setdata}
          name="firstname"
        />
        <br />
        <label>lastname</label>
        <input
          type="text"
          defaultValue={data.lastname}
          onChange={setdata}
          name="lastname"
        />
        <br />

        <label>age</label>
        <input
          type="text"
          onChange={setdata}
          defaultValue={data.age}
          name="age"
        />
        <br />

        <label>password</label>
        <input
          type="text"
          onChange={setdata}
          defaultValue={data.password}
          name="password"
        />
        <br />

        <label>phone</label>
        <input
          type="text"
          onChange={setdata}
          defaultValue={data.phone}
          name="phone"
        />
        <br />

        <label>t_username</label>
        <input
          type="text"
          onChange={setdata}
          defaultValue={data.t_username}
          name="t_username"
        />
        <br />

        <label>field_id</label>
        <input
          type="text"
          onChange={setdata}
          defaultValue={data.field_id}
          name="field_id"
        />
        <br />

        <label>jinsi</label>
        <select name="jinsi" onChange={setdata} defaultValue={data.jinsi}>
          <option value="1">Male</option>
          <option value="0">Famale</option>
        </select>
        <br />
        <label>Rasm</label>
        <input
          type="file"
          accept=".jpg, .png, .jpeg"
          name="image"
          onChange={(e) => {
            setValues({ ...data, [e.target.name]: e.target.files[0] });
          }}
        />
        <button type="submit">Yuborish</button>
      </form>
    </>
  );
}

export default App;
