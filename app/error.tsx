"use client";
function error({ error }: { error: { message: string } }) {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <p className="text-8xl font-sans text-primary">500</p>
      <p className="text-2xl font-serif text-muted-foreground">
        {error.message}
      </p>
    </div>
  );
}

export default error;
