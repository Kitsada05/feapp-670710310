import ProfileCard from './Components/ProfileCard';
import './App.css';

const members = [
  {
    id: 1, name: 'กฤษฎา นาคะพงศ์', nickname: 'พีท',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['เก๊กฮวย', 'แมว']
  },
  {id: 1, name: 'ณัฐดนัย สันติชวลิตสกุล', nickname: 'ตี๋',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['โค๊ก', 'จระเข้']
    }
    ,
  {id: 1, name: 'กฤตดิศักดิ์ แก้วบุรงค์', nickname: 'เนส',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาดำ', 'สิงโต']
    }
];

function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}


export default App;