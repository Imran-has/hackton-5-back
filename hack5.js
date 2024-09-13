// Function to generate the unique URL for the resume
function generateUniqueURL1(userName) {
    var baseURL = "https://yourapp.vercel.app/resume";
    var uniqueURL = "".concat(baseURL, "/").concat(encodeURIComponent(userName));
    return uniqueURL;
}
// Form submission handler
var form1 = document.getElementById('resume-form');
var resumeLink1 = document.getElementById('resume-link');
var shareableSection1 = document.getElementById('shareable-section');
form1.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    // Generate a unique URL
    var uniqueURL = generateUniqueURL(name);
    // Show the shareable link
    resumeLink1.href = uniqueURL;
    resumeLink1.textContent = uniqueURL;
    // Make the shareable section visible
    shareableSection1.classList.remove('hidden');
});
// Function to copy the URL to clipboard
var copyButton1 = document.getElementById('copy-link');
copyButton1.addEventListener('click', function () {
    var uniqueURL = resumeLink1.href;
    navigator.clipboard.writeText(uniqueURL)
        .then(function () {
        alert('Link copied to clipboard!');
    })
        .catch(function () {
        alert('Failed to copy link.');
    });
});
// Function to download the resume as PDF
var downloadButton1 = document.getElementById('download-resume');
downloadButton1.addEventListener('click', function () {
    var _a;
    var resumeContent = ((_a = document.getElementById('resume-content')) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
    var blob = new Blob([resumeContent], { type: 'application/pdf' });
    var link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
