import React from "react";

// ? Yeh accounts folder ke sare files auto import karega (Vite/React me allowed)
const accountModules = import.meta.glob("./*.jsx", { eager: true });


export default function AccountsPage() {
  const accounts = Object.values(accountModules).map((mod) => mod.default);

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 text-white">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
        ?? Free Fire Accounts for Sale
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {accounts.length > 0 ? (
          accounts.map((AccountComponent, index) => (
            <AccountComponent key={index} />
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No accounts available right now.
          </p>
        )}
      </div>
    </section>
  );

}
