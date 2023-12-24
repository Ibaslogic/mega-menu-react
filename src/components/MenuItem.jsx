import { NavLink } from 'react-router-dom';
import Container from './Container';
import DropdownContent from './DropdownContent';
import { ChevronDown, ChevronUp } from 'lucide-react';

const MenuItem = ({
  label,
  href,
  children,
  onToggle,
  active,
  setIsDrawerOpen,
}) => {
  const handleClick = () => {
    // Blur the active element to lose focus
    const activeElement = document.activeElement;
    activeElement.blur();
  };

  return (
    <li>
      <div className="nav_item_content">
        <NavLink
          to={href}
          className={({ isActive }) => (isActive ? 'active' : '')}
          onClick={() => {
            setIsDrawerOpen && setIsDrawerOpen(false);
            handleClick();
          }}
        >
          {label}
        </NavLink>
        {children && (
          <button
            className="md:hidden"
            onClick={onToggle}
            aria-label="Toggle dropdown"
            aria-haspopup="menu"
            aria-expanded={active ? 'true' : 'false'}
          >
            {active ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
        )}
      </div>
      {children && (
        <div
          role="menu"
          className={`dropdown ${
            active ? 'h-auto' : 'h-0 overflow-hidden md:h-auto'
          }`}
        >
          <Container>
            <DropdownContent
              submenuscontent={children}
              setIsDrawerOpen={setIsDrawerOpen}
              handleClick={handleClick}
            />
          </Container>
        </div>
      )}
    </li>
  );
};

export default MenuItem;
