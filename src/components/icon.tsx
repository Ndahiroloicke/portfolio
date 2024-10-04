// icon.tsx
export default function Icon({ name }: { name: string }) {
    return <i className={`bx bx-${name}`}></i>; // Ensure bx class is used properly
  }
  