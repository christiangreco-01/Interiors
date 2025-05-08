import React, { useState, useEffect } from "react";
import { supabase } from "./SignIn";
import "../style/AllUsers.css";
import { tokens } from "../components/theme";
import { useTheme } from "@mui/material";
import { Box, Toolbar } from "@mui/material";
import Header from "../components/Header";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export const AllUsers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const { data } = await supabase.from("users").select("*");
    setUsers(data);
  }

  function handleChange(event) {
    setUser((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function CreateUsers(e) {
    e.preventDefault(); // <-- impedisce il refresh automatico

    const { error } = await supabase
      .from("users")
      .insert({ email: user.email, password: user.password });

    if (error) {
      console.error("Errore inserimento:", error.message);
    } else {
      fetchUsers(); // aggiorna la lista utenti dopo inserimento
      setUser({ email: "", password: "" }); // reset campi
    }
  }

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "password",
      headerName: "Password",
      flex: 1,
    },
  ];

  return (
    <div className="tabella">
      <form onSubmit={CreateUsers} className="aggiunta">
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Surname"
          name="surname"
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
      {/* <table className="contenuto">
        <thead>
          <tr>
            <th>Id</th>
            <th>email</th>
            <th>password</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
      return (
      <Box m="20px">
        <Header
          title="USERS"
          subtitle="List of Contacts for Future Reference"
        />
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiTablePagination-root": {
              maxHeight: "none",
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[900],
              overflowX: "hidden", // evita scroll orizzontale
              overflowY: "hidden",
              width: "100%",
              boxSizing: "border-box",
              position: "relative",
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
            "& .MuiDataGrid-toolbarContainer": {
              backgroundColor: "#1e293b", // es: blu scuro
              padding: "8px 16px",
              borderBottom: "1px solid #334155", // sottile linea
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}
        >
          <DataGrid rows={users} columns={columns} showToolbar />
        </Box>
      </Box>
      );
    </div>
  );
};
