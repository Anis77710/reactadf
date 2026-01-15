import React, { useState, useEffect } from 'react';
import { Camera, Upload, Clock, Users, Award, MessageSquare, TrendingUp, FileText, Eye, EyeOff, Play, Pause, RotateCcw } from 'lucide-react';

const PresentationJudgingApp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeView, setActiveView] = useState('login');
  const [presentations, setPresentations] = useState([]);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedPresentation, setSelectedPresentation] = useState(null);
  const [scores, setScores] = useState({});
  const [blindMode, setBlindMode] = useState(true);

  // Timer logic
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Login Component
  const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('judge');

    const handleLogin = () => {
      if (email && password) {
        setCurrentUser({ email, role, id: Date.now() });
        setActiveView(role === 'judge' ? 'dashboard' : 'student-dashboard');
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800">Presentation Judging</h1>
            <p className="text-gray-600 mt-2">Secure login portal</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
              <div className="flex gap-4">
                <button
                  onClick={() => setRole('judge')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${
                    role === 'judge'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Judge
                </button>
                <button
                  onClick={() => setRole('student')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition ${
                    role === 'student'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Student
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Student Dashboard
  const StudentDashboard = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [aiAnalysis, setAiAnalysis] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    const handleFileUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        setUploadedFile(file);
        analyzePresentation(file);
      }
    };

    const analyzePresentation = (file) => {
      setIsAnalyzing(true);
      // Simulate AI analysis
      setTimeout(() => {
        const analysis = {
          visualDesign: Math.floor(Math.random() * 30) + 70,
          textQuality: Math.floor(Math.random() * 30) + 70,
          animation: Math.floor(Math.random() * 30) + 70,
          coherence: Math.floor(Math.random() * 30) + 70,
          grammar: Math.floor(Math.random() * 30) + 70,
          suggestions: [
            'Consider using more contrasting colors for better readability',
            'Some slides have dense text - break into bullet points',
            'Excellent use of transitions between topics'
          ]
        };
        setAiAnalysis(analysis);
        setIsAnalyzing(false);
        
        const newPresentation = {
          id: Date.now(),
          studentId: currentUser.id,
          studentName: currentUser.email.split('@')[0],
          fileName: file.name,
          uploadDate: new Date().toISOString(),
          aiAnalysis: analysis,
          status: 'pending',
          scores: []
        };
        setPresentations(prev => [...prev, newPresentation]);
      }, 2000);
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-800">Student Portal</h1>
            </div>
            <button
              onClick={() => {
                setCurrentUser(null);
                setActiveView('login');
              }}
              className="text-gray-600 hover:text-gray-800"
            >
              Logout
            </button>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Presentation</h2>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition cursor-pointer">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="file-upload"
                  accept=".pptx,.pdf,.key"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">Click to upload presentation</p>
                  <p className="text-sm text-gray-500 mt-2">PPTX, PDF, or Keynote (max 50MB)</p>
                </label>
              </div>

              {uploadedFile && (
                <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800 font-medium">✓ Uploaded: {uploadedFile.name}</p>
                </div>
              )}
            </div>

            {/* AI Analysis */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">AI Analysis</h2>
              
              {isAnalyzing && (
                <div className="text-center py-12">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-indigo-600 border-t-transparent"></div>
                  <p className="mt-4 text-gray-600">Analyzing presentation...</p>
                </div>
              )}

              {aiAnalysis && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600 font-medium">Visual Design</p>
                      <p className="text-2xl font-bold text-blue-700">{aiAnalysis.visualDesign}%</p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-purple-600 font-medium">Text Quality</p>
                      <p className="text-2xl font-bold text-purple-700">{aiAnalysis.textQuality}%</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600 font-medium">Animation</p>
                      <p className="text-2xl font-bold text-green-700">{aiAnalysis.animation}%</p>
                    </div>
                    <div className="p-4 bg-orange-50 rounded-lg">
                      <p className="text-sm text-orange-600 font-medium">Coherence</p>
                      <p className="text-2xl font-bold text-orange-700">{aiAnalysis.coherence}%</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-800 mb-3">AI Suggestions</h3>
                    <ul className="space-y-2">
                      {aiAnalysis.suggestions.map((suggestion, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-indigo-600 mt-1">•</span>
                          <span>{suggestion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {!aiAnalysis && !isAnalyzing && (
                <div className="text-center py-12 text-gray-500">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                  <p>Upload a presentation to see AI analysis</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Judge Dashboard
  const JudgeDashboard = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-indigo-600" />
              <h1 className="text-xl font-bold text-gray-800">Judge Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setBlindMode(!blindMode)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                {blindMode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span className="text-sm font-medium">
                  {blindMode ? 'Blind Mode' : 'Show Names'}
                </span>
              </button>
              <button
                onClick={() => {
                  setCurrentUser(null);
                  setActiveView('login');
                }}
                className="text-gray-600 hover:text-gray-800"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total Presentations</p>
                  <p className="text-3xl font-bold text-indigo-600 mt-2">{presentations.length}</p>
                </div>
                <Users className="w-12 h-12 text-indigo-200" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Graded</p>
                  <p className="text-3xl font-bold text-green-600 mt-2">
                    {presentations.filter(p => p.scores?.length > 0).length}
                  </p>
                </div>
                <Award className="w-12 h-12 text-green-200" />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Average Score</p>
                  <p className="text-3xl font-bold text-purple-600 mt-2">85%</p>
                </div>
                <TrendingUp className="w-12 h-12 text-purple-200" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Presentations to Judge</h2>
            
            {presentations.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No presentations uploaded yet</p>
              </div>
            ) : (
              <div className="space-y-4">
                {presentations.map((pres) => (
                  <div key={pres.id} className="border border-gray-200 rounded-lg p-4 hover:border-indigo-500 transition">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-800">
                          {blindMode ? `Presentation #${pres.id}` : pres.studentName}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{pres.fileName}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          Uploaded: {new Date(pres.uploadDate).toLocaleString()}
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          setSelectedPresentation(pres);
                          setActiveView('grading');
                        }}
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                      >
                        Grade
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Grading View
  const GradingView = () => {
    const [manualScores, setManualScores] = useState({
      content: 0,
      delivery: 0,
      visuals: 0,
      timing: 0
    });
    const [gestureType, setGestureType] = useState('appropriate');
    const [feedback, setFeedback] = useState('');
    const timeLimit = 600; // 10 minutes

    const calculatePenalty = () => {
      if (timer > timeLimit) {
        const overtime = timer - timeLimit;
        return Math.min(Math.floor(overtime / 30) * 5, 20);
      }
      return 0;
    };

    const totalScore = () => {
      const manual = Object.values(manualScores).reduce((a, b) => a + b, 0) / 4;
      const penalty = calculatePenalty();
      const gestureBonus = gestureType === 'appropriate' ? 5 : gestureType === 'minimal' ? -3 : -5;
      return Math.max(0, Math.min(100, manual + gestureBonus - penalty));
    };

    const submitGrade = () => {
      const grade = {
        judgeId: currentUser.id,
        scores: manualScores,
        gestureType,
        feedback,
        totalScore: totalScore(),
        timeUsed: timer,
        penalty: calculatePenalty(),
        timestamp: new Date().toISOString()
      };
      
      setPresentations(prev => prev.map(p => 
        p.id === selectedPresentation.id 
          ? { ...p, scores: [...(p.scores || []), grade] }
          : p
      ));
      
      alert('Grade submitted successfully!');
      setActiveView('dashboard');
      setTimer(0);
      setIsTimerRunning(false);
    };

    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => setActiveView('dashboard')}
              className="text-gray-600 hover:text-gray-800"
            >
              ← Back to Dashboard
            </button>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 rounded-lg">
                <Clock className="w-5 h-5 text-indigo-600" />
                <span className="font-mono text-lg font-bold text-indigo-600">
                  {formatTime(timer)}
                </span>
              </div>
              <button
                onClick={() => setIsTimerRunning(!isTimerRunning)}
                className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                {isTimerRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setTimer(0)}
                className="p-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* AI Analysis Display */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <h3 className="text-xl font-bold text-gray-800 mb-4">AI Analysis</h3>
                {selectedPresentation?.aiAnalysis && (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Visual Design</span>
                      <span className="font-semibold text-blue-600">
                        {selectedPresentation.aiAnalysis.visualDesign}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Text Quality</span>
                      <span className="font-semibold text-purple-600">
                        {selectedPresentation.aiAnalysis.textQuality}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Animation</span>
                      <span className="font-semibold text-green-600">
                        {selectedPresentation.aiAnalysis.animation}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Coherence</span>
                      <span className="font-semibold text-orange-600">
                        {selectedPresentation.aiAnalysis.coherence}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Grammar</span>
                      <span className="font-semibold text-red-600">
                        {selectedPresentation.aiAnalysis.grammar}%
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Manual Grading */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Manual Grading</h3>
                
                <div className="space-y-6">
                  {Object.entries({
                    content: 'Content Quality',
                    delivery: 'Delivery & Presentation',
                    visuals: 'Visual Appeal',
                    timing: 'Time Management'
                  }).map(([key, label]) => (
                    <div key={key}>
                      <div className="flex justify-between items-center mb-2">
                        <label className="text-sm font-medium text-gray-700">{label}</label>
                        <span className="text-lg font-bold text-indigo-600">{manualScores[key]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={manualScores[key]}
                        onChange={(e) => setManualScores({
                          ...manualScores,
                          [key]: parseInt(e.target.value)
                        })}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Gesture Analysis</h3>
                <div className="grid grid-cols-3 gap-4">
                  {['minimal', 'appropriate', 'excessive'].map((type) => (
                    <button
                      key={type}
                      onClick={() => setGestureType(type)}
                      className={`py-3 px-4 rounded-lg font-medium transition ${
                        gestureType === type
                          ? 'bg-indigo-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Feedback</h3>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full h-32 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  placeholder="Provide detailed feedback for the student..."
                />
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">Final Score</h3>
                  <div className="text-4xl font-bold text-indigo-600">{totalScore().toFixed(1)}</div>
                </div>
                {calculatePenalty() > 0 && (
                  <p className="text-sm text-red-600 mb-4">
                    Time penalty: -{calculatePenalty()} points (exceeded time limit)
                  </p>
                )}
                <button
                  onClick={submitGrade}
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                >
                  Submit Grade
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render appropriate view
  if (!currentUser) return <LoginView />;
  if (activeView === 'student-dashboard') return <StudentDashboard />;
  if (activeView === 'dashboard') return <JudgeDashboard />;
  if (activeView === 'grading') return <GradingView />;

  return <LoginView />;
};

export default PresentationJudgingApp;