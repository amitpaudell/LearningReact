function Hello({ person, fruit }) {
  return (
    <>
      <h1>
        Hello {person.name}, you are {person.age} years old living in
        {person.country} holding an {fruit}
      </h1>
    </>
  );
}
export default Hello;
