function AvailabilityBadge({isAvailable}) {
    return (
        <p>Course is: {isAvailable ? "Available" : "Recruiting closed"}</p>
    )
}

export default AvailabilityBadge;