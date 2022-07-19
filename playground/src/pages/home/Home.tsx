import { REACT_TEST, Demo } from 'my-pkg-custom-name';

export default function Home() {
  return (
    <div>
      home
      {' '}
      <span className="demo">
        { REACT_TEST.demo }
      </span>
      <Demo />
    </div>
  );
}
