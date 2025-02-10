import { FaVolumeUp } from "react-icons/fa";
import { FaKeyboard, FaFileAlt, FaTasks, FaCloudUploadAlt, FaPlay, FaPause, FaMinus, FaPlus, FaQuestionCircle, FaMicrophone,FaAdjust } from "react-icons/fa";

const Profilepage = () => {
  return (
    <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Quick Access Tools</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="rounded bg-[#121314] text-white p-4 flex flex-col items-center justify-center" aria-label="Text-to-Speech">
                <FaVolumeUp />
                <span>Text-to-Speech</span>
              </button>
              <button className="rounded bg-[#121314] text-white p-4 flex flex-col items-center justify-center" aria-label="Speech-to-Text">
                <FaKeyboard className="text-2xl mb-2" />
                <span>Speech-to-Text</span>
              </button>
              <button className="rounded bg-[#121314] text-white p-4 flex flex-col items-center justify-center" aria-label="Summary Generator">
                <FaFileAlt className="text-2xl mb-2" />
                <span>Summary Generator</span>
              </button>
              <button className="rounded bg-[#121314] text-white p-4 flex flex-col items-center justify-center" aria-label="Quiz Creator">
                <FaTasks className="text-2xl mb-2" />
                <span>Quiz Creator</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Upload Study Materials</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <FaCloudUploadAlt className="text-4xl text-gray-400 mb-4" />
              <p className="text-gray-600">Drag and drop your files here or</p>
              <button className="rounded bg-blue-500 text-white px-4 py-2 mt-4" aria-label="Browse Files">Browse Files</button>
              <p className="text-sm text-gray-500 mt-2">Supports PDF, Word, and Text files</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">Content Workspace</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Text Display</h3>
                  <div className="flex space-x-2">
                    <button className="rounded p-2 border" aria-label="Decrease Text Size"><FaMinus /></button>
                    <button className="rounded p-2 border" aria-label="Increase Text Size"><FaPlus /></button>
                  </div>
                </div>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-medium mb-4">Audio Controls</h3>
                <div className="flex items-center space-x-4">
                  <button className="rounded p-2 border" aria-label="Play Audio"><FaPlay /></button>
                  <button className="rounded p-2 border" aria-label="Pause Audio"><FaPause /></button>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full">
                    <div className="bg-blue-500 h-2 rounded-full w-1/3"></div>
                  </div>
                  <span className="text-sm text-gray-600">2:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4">
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Learning Progress</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Study Time Today</h3>
                <div className="flex items-center">
                  <div className="flex-1 bg-gray-200 h-2 rounded-full">
                    <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <span className="ml-4 text-sm font-medium">75%</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Recent Quizzes</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Mathematics</span>
                    <span className="text-sm font-medium">90%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Science</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">History</span>
                    <span className="text-sm font-medium">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-semibold mb-6">Recent Materials</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <FaFileAlt className="text-red-500 text-xl" />
                <div>
                  <p className="font-medium">Chapter 5 - Physics</p>
                  <p className="text-sm text-gray-500">Accessed 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaFileAlt className="text-blue-500 text-xl" />
                <div>
                  <p className="font-medium">Biology Notes</p>
                  <p className="text-sm text-gray-500">Accessed yesterday</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaFileAlt className="text-gray-500 text-xl" />
                <div>
                  <p className="font-medium">Math Formulas</p>
                  <p className="text-sm text-gray-500">Accessed 3 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <button className="rounded flex items-center space-x-2 border border-gray-300 px-4 py-2" aria-label="Screen Reader">
              <FaQuestionCircle />
              <span>Screen Reader</span>
            </button>
            <button className="rounded flex items-center space-x-2 border border-gray-300 px-4 py-2" aria-label="Contrast">
              <FaAdjust />
              <span>Contrast</span>
            </button>
          </div>
          <div className="flex space-x-4">
            <button className="rounded flex items-center space-x-2 border border-gray-300 px-4 py-2" aria-label="Help">
              <FaQuestionCircle />
              <span>Help</span>
            </button>
            <button className="rounded flex items-center space-x-2 border border-gray-300 px-4 py-2" aria-label="Voice Commands">
              <FaMicrophone />
              <span>Voice Commands</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profilepage;
