import newYork from '../assets/newYork.jpg';

export const City = (props) => {
  return (
    <div>
      <img src={newYork} alt='New York' width='300px' height='200px' />
      <h2>New York</h2>
      <p>New York Travel Guide</p>
      <p>Info</p>
    </div>
  )
}
