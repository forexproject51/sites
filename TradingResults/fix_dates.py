#!/usr/bin/env python3
"""
Recovery script for XAUUSD.htm:
1. Swap Open and Close back to undo the previous wrong fix
2. Then only update Close Time to be after Open Time (keep Open Time unchanged)
"""
import re
from datetime import datetime, timedelta

def parse_date(date_str):
    return datetime.strptime(date_str, '%Y.%m.%d %H:%M')

def format_date(dt):
    return dt.strftime('%Y.%m.%d %H:%M')

def fix_dates_in_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    pattern = r'(<td class=msdate nowrap>)(\d{4}\.\d{2}\.\d{2} \d{2}:\d{2})(</td><td>(?:buy|sell)</td>.*?<td class=msdate nowrap>)(\d{4}\.\d{2}\.\d{2} \d{2}:\d{2})(</td>)'
    
    # Step 1: Swap all Open and Close back to undo previous fix
    def swap_back(match):
        prefix1 = match.group(1)
        open_time = match.group(2)
        middle = match.group(3)
        close_time = match.group(4)
        suffix = match.group(5)
        # Swap them
        return f"{prefix1}{close_time}{middle}{open_time}{suffix}"
    
    content = re.sub(pattern, swap_back, content)
    
    # Step 2: Now only fix Close Time where Close < Open
    fixes = []
    
    def fix_close_only(match):
        prefix1 = match.group(1)
        open_time = match.group(2)
        middle = match.group(3)
        close_time = match.group(4)
        suffix = match.group(5)
        
        open_dt = parse_date(open_time)
        close_dt = parse_date(close_time)
        
        # Only fix if close is before open
        if close_dt < open_dt:
            # Calculate new close: mirror the difference to after open time
            diff = open_dt - close_dt
            new_close_dt = open_dt + diff
            new_close = format_date(new_close_dt)
            fixes.append((open_time, close_time, new_close))
            return f"{prefix1}{open_time}{middle}{new_close}{suffix}"
        
        return match.group(0)
    
    content = re.sub(pattern, fix_close_only, content)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    
    return fixes

if __name__ == '__main__':
    fixes = fix_dates_in_file('XAUUSD.htm')
    print(f"Fixed {len(fixes)} transactions (only Close Time updated, Open Time preserved):")
    for i, (open_t, old_close, new_close) in enumerate(fixes[:20], 1):
        print(f"  {i}. Open: {open_t} | Close: {old_close} -> {new_close}")
    if len(fixes) > 20:
        print(f"  ... and {len(fixes) - 20} more")
