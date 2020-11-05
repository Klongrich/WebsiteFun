import Dexie from "dexie";

var db = new Dexie("ClientInfoV3");

var ClientData = {
  User: "",
  LastVisted: "",
};

async function addData(UserID) {
  await db.ClientInfo.add({
    User: UserID,
    LastVisted: "UTC TIME",
  });
}

async function checkForUser(UserID) {
  const data = await db.ClientInfo.where({
    User: UserID,
  }).first();
  return data;
}

export default async function Cache(UserID) {
  db.version(1).stores({
    ClientInfo: "++id, &User, LastVisited",
  });

  db.open().catch(function (err) {
    console.error(err.stack || err);
  });

  ClientData = await checkForUser(UserID);

  if (ClientData) {
    return ClientData;
  } else {
    addData(UserID);
  }

  return null;
}
