const SubmissionFlow = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-6">
        User Submission Flow
      </h3>

      <ol className="space-y-3 text-gray-300 list-decimal list-inside">
        <li>User submits article via Google Form / CMS</li>
        <li>Editorial team reviews content</li>
        <li>Plagiarism & security checks</li>
        <li>Approved articles get published</li>
      </ol>

      <div className="mt-6 p-4 border border-red-500 text-red-400 rounded">
        ❌ Anonymous posts not allowed <br />
        ❌ Illegal hacking guides rejected <br />
        ✅ Educational & defensive content only
      </div>
    </section>
  );
};

export default SubmissionFlow;
