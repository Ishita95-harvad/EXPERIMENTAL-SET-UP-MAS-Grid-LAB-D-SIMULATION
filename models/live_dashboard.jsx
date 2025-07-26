import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [processingRate, setProcessingRate] = useState(0);
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState(null);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/live-metrics', {
        headers: {
          Authorization: 'Bearer your-secret-token'
        }
      });
      setData(res.data.sensors);
      setProcessingRate(res.data.processingRate);
      setLogs(res.data.logs);
      setError(null);
    } catch (err) {
      setError('Failed to load data. Check API or token.');
    }
  };

  useEffect(() => {
    if (!paused) {
      fetchData();
      intervalRef.current = setInterval(fetchData, 5000);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const togglePause = () => {
    setPaused(prev => !prev);
  };

  const retryFetch = () => {
    setError(null);
    fetchData();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 dark:bg-gray-900 min-h-screen">
      <Card className="col-span-1 dark:bg-gray-800">
        <CardContent>
          <h2 className="text-xl font-bold mb-2 text-gray-100">Data Processing Rate</h2>
          <motion.p className="text-3xl font-semibold text-green-400" animate={{ scale: 1.05 }} transition={{ duration: 0.5 }}>
            {processingRate} records/sec
          </motion.p>
        </CardContent>
      </Card>

      <Card className="col-span-1 dark:bg-gray-800">
        <CardContent>
          <h2 className="text-xl font-bold mb-2 text-gray-100">Live Sensor Data</h2>
          <AnimatePresence>
            {error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-sm"
              >
                {error}
                <Button variant="outline" size="sm" className="ml-2 mt-1" onClick={retryFetch}>
                  Retry
                </Button>
              </motion.div>
            ) : (
              <motion.div key="chart" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={data}>
                    <XAxis dataKey="name" stroke="#fff" />
                    <YAxis stroke="#fff" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1f2937', color: '#fff' }}
                      formatter={(value) => value === null ? 'N/A' : value}
                    />
                    <Bar dataKey="value">
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.value === null ? '#ef4444' : '#3b82f6'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>

      <Card className="col-span-1 md:col-span-2 dark:bg-gray-800">
        <CardContent>
          <h2 className="text-xl font-bold mb-2 text-gray-100">System Controls</h2>
          <Button className="mr-2" onClick={togglePause}>
            {paused ? 'Resume' : 'Pause'}
          </Button>
          <Button variant="outline" onClick={retryFetch}>Manual Refresh</Button>
        </CardContent>
      </Card>

      <Card className="col-span-1 md:col-span-2 dark:bg-gray-800">
        <CardContent>
          <h2 className="text-xl font-bold mb-2 text-gray-100">Log History</h2>
          <div className="h-40 overflow-y-auto text-sm text-gray-200 bg-gray-700 p-2 rounded">
            {logs.map((log, index) => (
              <div key={index} className="border-b border-gray-600 py-1">{log}</div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
