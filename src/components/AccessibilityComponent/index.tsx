export function AccessibilityComponent() {
  const inputFocusStyle = {
    outline: "2px solid #007bff",
  };

  //To make a component accessibility you need to follow below

  //1) use Semantic HTML in below like label ,input and button.
  //2) add type
  //3)Use ARIA (Accessible Rich Internet Applications) attributes to enhance accessibility.
  //For example, you can use aria-labelledby and aria-label to associate an input with its label.
  //4)add Focus

  return (
    <>
      <label htmlFor="username">Username:</label>
      <input
        style={inputFocusStyle}
        type="text"
        id="username"
        name="username"
        aria-labelledby="usernameLabel"
      />
      <button type="button" aria-label="Submit Form">
        Submit
      </button>
    </>
  );
}
