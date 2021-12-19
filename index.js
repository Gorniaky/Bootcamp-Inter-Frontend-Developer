// Maps

function getAdmins(map) {
  const admins = [];
  for (const [key, value] of map) {
    if (value.toLowerCase() === 'admin')
      admins.push(key);
  }
  return admins;
}

const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));

// Sets

function uniqueElements(array) {
	return [...new Set(array)];
}

const array = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(uniqueElements(array));