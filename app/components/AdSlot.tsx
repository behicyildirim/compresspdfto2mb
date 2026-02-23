type Props = {
  label?: string;
};

export default function AdSlot({ label = "Advertisement" }: Props) {
  return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-6 text-center text-sm text-gray-400">
      {label}
    </div>
  );
}