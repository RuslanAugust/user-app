import React, { useState, useEffect } from 'react';
import { useUnit } from 'effector-react';
import {
  $user,
  getProfileFx,
  updateProfileFx,
  deleteProfileFx,
  logout,
} from '../../store/auth';
import { uploadAPI } from '../../api/';
import {
  Container,
  ProfileCard,
  Avatar,
  AvatarUpload,
  Info,
  Field,
  Label,
  Value,
  Input,
  Button,
  ButtonGroup,
  Section,
  Title,
  Error,
} from './style';
import {useNavigate} from 'react-router-dom';

const Profile: React.FC = () => {
  const user = useUnit($user);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
  });
  const [error, setError] = useState('');
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user?.firstName || '',
        lastName: user?.lastName || '',
        age: user?.age?.toString() || '',
      });
    }
  }, [user]);

  useEffect(() => {
    getProfileFx();
  }, []);

  const handleUpdate = async () => {
    try {
      await updateProfileFx({
        ...formData,
        age: formData.age ? parseInt(formData.age) : undefined,
      });
      setIsEditing(false);
      setError('');
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка загрузки');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Уверены что хотите удалить аккаунт')) {
      try {
        await deleteProfileFx();
      } catch (err: any) {
        setError(err.response?.data?.error || 'Ощибка удаления');
      }
    }
  };

  const handleAvatarUpload = async () => {
    if (!avatarFile) return;

    try {
      await uploadAPI.uploadAvatar(avatarFile);
      setAvatarFile(null);
      getProfileFx();
    } catch (err: any) {
      setError(err.response?.data?.error || 'Ошибка загрузки');
    }
  };

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {

  }, [user]);

  return (
    <Container>
      <Title>Профиль</Title>
      <ProfileCard>
        <Section>
          <Avatar src={user?.avatar ? `http://localhost:3001${user?.avatar}` : ''} />
          <AvatarUpload>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setAvatarFile(e.target.files?.[0] || null)}
            />
            <Button onClick={handleAvatarUpload} disabled={!avatarFile}>
              Загрузить аватар
            </Button>
          </AvatarUpload>
        </Section>

        <Section>
          <Info>
            <Field>
              <Label>Логин:</Label>
              {isEditing ? (
                <Value>{user?.username}</Value>
              ) : (
                <Value>{user?.username}</Value>
              )}
            </Field>
            <Field>
              <Label>Email:</Label>
              <Value>{user?.email}</Value>
            </Field>
            <Field>
              <Label>Фамилия:</Label>
              {isEditing ? (
                <Input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              ) : (
                <Value>{user?.firstName || 'Нету'}</Value>
              )}
            </Field>
            <Field>
              <Label>Имя:</Label>
              {isEditing ? (
                <Input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              ) : (
                <Value>{user?.lastName || 'Нету'}</Value>
              )}
            </Field>
            <Field>
              <Label>Возраст:</Label>
              {isEditing ? (
                <Input
                  type="number"
                  value={formData.age}
                  onChange={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                />
              ) : (
                <Value>{user?.age || 'Нету'}</Value>
              )}
            </Field>
          </Info>

          {error && <Error>{error}</Error>}

          <ButtonGroup>
            {isEditing ? (
              <>
                <Button onClick={handleUpdate}>Сохранить</Button>
                <Button onClick={() => setIsEditing(false)}>Отмена</Button>
              </>
            ) : (
              <>
                <Button onClick={() => setIsEditing(true)}>Редактировать</Button>
                <Button onClick={handleDelete}>Удалить аккаунт</Button>
                <Button onClick={handleLogout}>Выход</Button>
              </>
            )}
          </ButtonGroup>
        </Section>
      </ProfileCard>
    </Container>
  );
};

export default Profile;
