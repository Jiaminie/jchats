import React from 'react';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const Comparison: React.FC = () => {
  const rows = [
    { name: 'Data Entry', statusQuo: 'Manual, Error-Prone', jiaminie: 'Automated Real-Time Sync', isHeader: true },
    { name: 'Customer Response', statusQuo: 'Delayed (Hours/Days)', jiaminie: 'Instant AI Response (Seconds)' },
    { name: 'Order Processing', statusQuo: 'Fragmented Spreadsheets', jiaminie: 'Centralized Dashboard' },
    { name: 'Payment Reconciliation', statusQuo: 'Manual Verification', jiaminie: 'Auto-Matched to Ledger' },
    { name: 'Scalability', statusQuo: 'Linear (Hire more staff)', jiaminie: 'Exponential (Add more compute)' },
  ];

  return (
    <Box id="comparison" sx={{ py: 12, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 2, fontWeight: 700 }}
        >
          The Cost of <Box component="span" sx={{ color: 'secondary.main' }}>Inaction</Box>
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{ mb: 8, color: 'text.secondary', fontWeight: 400 }}
        >
          Why leading enterprises are migrating from manual workflows.
        </Typography>

        <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 0, border: '1px solid rgba(255,255,255,0.1)', bgcolor: 'background.paper' }}>
          <Table sx={{ minWidth: 650 }} aria-label="comparison table">
            <TableHead>
              <TableRow sx={{ bgcolor: 'rgba(255,255,255,0.02)' }}>
                <TableCell sx={{ color: 'text.secondary', borderBottom: '1px solid rgba(255,255,255,0.1)', py: 3, width: '30%' }}>METRIC</TableCell>
                <TableCell sx={{ color: 'error.main', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)', py: 3, width: '35%' }}>STATUS QUO</TableCell>
                <TableCell sx={{ color: 'primary.main', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)', py: 3, width: '35%' }}>JChats</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" sx={{ color: 'text.primary', borderBottom: '1px solid rgba(255,255,255,0.05)', py: 3, fontSize: '1.1rem' }}>
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ color: 'text.secondary', borderBottom: '1px solid rgba(255,255,255,0.05)', py: 3, fontSize: '1.1rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CancelIcon sx={{ color: 'error.dark', fontSize: 20 }} />
                      {row.statusQuo}
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: 'white', borderBottom: '1px solid rgba(255,255,255,0.05)', py: 3, fontSize: '1.1rem', fontWeight: 500 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                      {row.jiaminie}
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default Comparison;
