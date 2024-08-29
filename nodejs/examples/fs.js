#!usr/bin/node

const fs = require('fs');

fs.mkdir(path.join(__dirname, pathName), 
  { recursive: true}, 
  (err) => {
    if (err) {
      return console.error(err);
    }
    console.log('Directory created successfully');
});

const content = 'Some Content!';

fs.writeFile(fileName, content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Success');
  }
});

async function example(){
  try{
    const con = 'More Content';
    await fs2.appendFile(fileName, con);
    await fs2.appendFile(fileName, con);
    await fs2.appendFile(fileName, con);
    await fs2.appendFile(fileName, con);
    console.log('More Success');
  } catch (err) {
    console.log(err);
  }
}; 

const indexPath = '../index.html';
async function readTest(){
  try {
    setTimeout(async () => {
      const data = await fs2.readFile(indexPath, 'utf-8');
      console.log(data);
    }, 1000)
  } catch (err) {
    console.log(err)
  }
}

example();
readTest(); 

fs.mkdir('fsDrop/file', () => {});
