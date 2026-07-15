export default function Divider({ icon = "♡" }) {
  return (
    <div className="ornament-divider text-gold" aria-hidden="true">
      <span className="text-sm leading-none">{icon}</span>
    </div>
  );
}
