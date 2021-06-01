import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAvailabilityZonesConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#all_availability_zones DataAwsAvailabilityZones#all_availability_zones}.
     */
    readonly allAvailabilityZones?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#exclude_names DataAwsAvailabilityZones#exclude_names}.
     */
    readonly excludeNames?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#exclude_zone_ids DataAwsAvailabilityZones#exclude_zone_ids}.
     */
    readonly excludeZoneIds?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#state DataAwsAvailabilityZones#state}.
     */
    readonly state?: string;
    /**
     * filter block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#filter DataAwsAvailabilityZones#filter}
     */
    readonly filter?: DataAwsAvailabilityZonesFilter[];
}
export interface DataAwsAvailabilityZonesFilter {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#name DataAwsAvailabilityZones#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html#values DataAwsAvailabilityZones#values}.
     */
    readonly values: string[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones}.
 */
export declare class DataAwsAvailabilityZones extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsAvailabilityZonesConfig);
    private _allAvailabilityZones?;
    get allAvailabilityZones(): boolean;
    set allAvailabilityZones(value: boolean);
    resetAllAvailabilityZones(): void;
    get allAvailabilityZonesInput(): boolean | undefined;
    private _excludeNames?;
    get excludeNames(): string[];
    set excludeNames(value: string[]);
    resetExcludeNames(): void;
    get excludeNamesInput(): string[] | undefined;
    private _excludeZoneIds?;
    get excludeZoneIds(): string[];
    set excludeZoneIds(value: string[]);
    resetExcludeZoneIds(): void;
    get excludeZoneIdsInput(): string[] | undefined;
    get groupNames(): string[];
    get id(): string;
    get names(): string[];
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string | undefined;
    get zoneIds(): string[];
    private _filter?;
    get filter(): DataAwsAvailabilityZonesFilter[];
    set filter(value: DataAwsAvailabilityZonesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsAvailabilityZonesFilter[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
