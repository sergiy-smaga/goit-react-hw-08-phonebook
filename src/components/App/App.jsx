import { Route, Routes } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import ContactsView from 'views/ContactsView/ContactsView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<div>Welcome to contact book</div>} />
        <Route path="contacts" element={<ContactsView />} />
        <Route path="register" element={<RegisterView />} />
        <Route path="login" element={<LoginView />} />
      </Route>
    </Routes>
  );
};
