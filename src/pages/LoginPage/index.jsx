import { message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import ZabbixImg from "../../assets/zabbix_150x39.png";
import { useAuth } from "../../context/useAuth";
import { api } from "../../service/api";
import { Button, Container, Form, Img, Select } from "./styles";

function LoginPage() {
  const [servers, setServers] = useState([]);
  const [selectItens, setSelectItens] = useState();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/servers-login")
      .then((response) => {
        setServers(response.data.data);
      })
      .catch((error) => {
        console.log("Error servers login", error);
      });
  }, []);

  const selectServers = (e) => {
    setSelectItens(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await auth.authenticate(selectItens, user, password);
      navigate("/home");
    } catch (error) {
      console.log(error);
      message.error("Usuário Zabbix inválido!");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleLogin}>
        <Img src={ZabbixImg} alt="Zabbix Logo" />
        <Select name="server" value={selectItens} onChange={selectServers}>
          <option defaultValue value="">
            Escolha uma opção...
          </option>
          {servers.map((server) => (
            <option value={server.id} key={server.id}>
              {server.name}
            </option>
          ))}
        </Select>
        <br />
        <input
          type="text"
          placeholder="Usuário do Zabbix"
          name="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha do Zabbix"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <hr />
        <Button>Entrar</Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
