export default function (props) {
  return (
    <div className="details-container">
      <img src={props.details.avatar_url} />
      <a target="_blank" href={props.details.html_url}>
        Click here to view GitHub profile
      </a>
      <p>Name: {props.details.name || props.details.login}</p>
      <p>Followers: {props.details.followers}</p>
      <p>Following: {props.details.following}</p>
    </div>
  );
}
