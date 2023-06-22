import ProgressBar from "./ProgressBar";

export const ProgressBarWrapper = () => {
  return (
    <>
      <h2>Progress bar </h2>
      <div className="container">
        <ProgressBar width={0} />
        <ProgressBar width={10} />
        <ProgressBar width={40} />
        <ProgressBar width={-40} />
        <ProgressBar width={70} />
        <ProgressBar width={100} />
      </div>
    </>
  );
};
