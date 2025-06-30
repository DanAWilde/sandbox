import { theme } from 'rapid-ai-design-system';

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: theme.colors.neutral.lightest,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <h1
        style={{
          fontSize: theme.typography.sizes.textLg,
          fontWeight: theme.typography.weights.semibold,
          color: theme.colors.text.default,
        }}
      >
        Rapid Design System Sandbox
      </h1>
    </main>
  );
}