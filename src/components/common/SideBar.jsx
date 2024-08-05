import Box from "@mui/material/Box";
import {
  Typography,
  FormControlLabel,
  Checkbox,
  CircularProgress,
} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { FormControl, Select, MenuItem } from "@mui/material";
import { Button, TextField } from "@mui/material";
import Note from "./Note";
import { useEffect, useState } from "react";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const SideBar = ({ loading = false, records = [], fetchRecords }) => {
  const [selectedOption, setSelectedOption] = useState("allnote");
  const [searchedText, setSearchedText] = useState("");
  const [filteredRecords, setFilteredRecords] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSerchTextChange = (event) => {
    setSearchedText(event.target.value);
  };

  // filter the records when serached text is present
  useEffect(() => {
    const updatedRecords = records.filter((record) =>
      record.patientName.toLowerCase().includes(searchedText.toLowerCase())
    );
    setFilteredRecords(updatedRecords);
  }, [searchedText, records]);

  const options = [
    { value: "allnote", label: "All Notes", icon: <StickyNote2Icon /> },
    { value: "unreadnotes", label: "Unread Notes", icon: <MailOutlineIcon /> },
    { value: "trash", label: "Trash", icon: <FolderDeleteIcon /> },
  ];

  return (
    <div>
      <Box
        sx={{
          gridArea: "2 / 2 / 3 / 3",
          minHeight: "0px",
          overflowY: "auto",
          transition: "background 0.1s ease 0s",
          borderRight: "1px solid rgba(0, 0, 0, 0.12)",
          display: "flex",
          height: "calc(100vh - 50px)",
          width: "360px",
          flex: "0 0 360px",
        }}
      >
        <Box sx={{ width: "100%", overflow: "hidden" }}>
          <Box
            sx={{
              padding: "0 16px 0 16px",
            }}
          >
            <Button
              sx={{ width: "100%", marginTop: "10px" }}
              variant="outlined"
              onClick={() => navigate("/record")}
            >
              <AddIcon
                sx={{ width: "20px", height: "20px", marginRight: "8px" }}
              />
              Start A Visit
            </Button>
          </Box>
          <Box
            sx={{
              padding: "0 16px 0 16px",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Search notes by name"
              variant="outlined"
              value={searchedText}
              onChange={handleSerchTextChange}
              fullWidth
              sx={{
                marginTop: "16px",
                "& .MuiInputBase-input": {
                  padding: "8.5px 14px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box
            sx={{
              height: "calc(100vh - 154px)",
              overflow: "auto",
            }}
          >
            <Box
              sx={{
                borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
                display: "flex",
                alignItems: "center",
                padding: "8px 16px",
                position: "sticky",
                top: 0,
                background: "white",
                zIndex: 1,
                // padding: "10px",
              }}
            >
              <FormControlLabel
                sx={{
                  marginRight: "0",
                }}
                control={<Checkbox checked={false} />}
              />
              <FormControl
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": { borderColor: "transparent" },
                  "& .MuiSelect-select": {
                    padding: "0",
                  },
                }}
              >
                <Select
                  id="notes-select"
                  value={selectedOption}
                  onChange={handleChange}
                  displayEmpty
                  fullWidth
                  sx={{
                    // "& .MuiSelect-select": {
                    //   padding: "0",
                    // },
                    "& fieldset": {
                      border: "none",
                    },
                    "& .MuiSelect-select": {
                      minHeight: "unset",
                      paddingTop: 0,
                      paddingBottom: 0,
                    },
                    "&:focus": {
                      backgroundColor: "transparent",
                    },
                    "& .MuiInputBase-input": {
                      padding: "0",
                    },
                  }}
                  renderValue={() => {
                    if (selectedOption === "") {
                      return <Typography>Select an option</Typography>;
                    }
                    const selected = options.find(
                      (option) => option.value === selectedOption
                    );
                    return (
                      <>
                        <Typography>{selected.label}</Typography>
                      </>
                    );
                  }}
                >
                  {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      <ListItemIcon>{option.icon}</ListItemIcon>
                      <Typography>{option.label}</Typography>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box>
              {loading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "30px auto",
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                (searchedText === "" ? records : filteredRecords)?.map(
                  (record) => (
                    <Note
                      key={record.id}
                      record={record}
                      fetchRecords={fetchRecords}
                    />
                  )
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

SideBar.prototype = {
  loading: PropTypes.bool,
  records: PropTypes.array,
};

export default SideBar;
