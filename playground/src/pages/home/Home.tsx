import { REACT_TEST } from 'my-pkg-name';

export default function Home() {
  return (
    <div>
      home
      {' '}
      <span className="demo">
        { REACT_TEST.demo }
      </span>
    </div>
  );
}
