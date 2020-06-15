function PageBorder({ children }) {
  return (
    <div className="flex flex-col h-full p-4 space-y-4 border border-gray-700 rounded-md">
      {children}
    </div>
  );
}

export default PageBorder;
