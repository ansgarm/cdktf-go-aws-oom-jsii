import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxGatewayAssociationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#allowed_prefixes DxGatewayAssociation#allowed_prefixes}.
     */
    readonly allowedPrefixes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#associated_gateway_id DxGatewayAssociation#associated_gateway_id}.
     */
    readonly associatedGatewayId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#associated_gateway_owner_account_id DxGatewayAssociation#associated_gateway_owner_account_id}.
     */
    readonly associatedGatewayOwnerAccountId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#dx_gateway_id DxGatewayAssociation#dx_gateway_id}.
     */
    readonly dxGatewayId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#proposal_id DxGatewayAssociation#proposal_id}.
     */
    readonly proposalId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#vpn_gateway_id DxGatewayAssociation#vpn_gateway_id}.
     */
    readonly vpnGatewayId?: string;
    /**
     * timeouts block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#timeouts DxGatewayAssociation#timeouts}
     */
    readonly timeouts?: DxGatewayAssociationTimeouts;
}
export interface DxGatewayAssociationTimeouts {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#create DxGatewayAssociation#create}.
     */
    readonly create?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#delete DxGatewayAssociation#delete}.
     */
    readonly delete?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html#update DxGatewayAssociation#update}.
     */
    readonly update?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html aws_dx_gateway_association}.
 */
export declare class DxGatewayAssociation extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association.html aws_dx_gateway_association} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxGatewayAssociationConfig);
    private _allowedPrefixes?;
    get allowedPrefixes(): string[];
    set allowedPrefixes(value: string[]);
    resetAllowedPrefixes(): void;
    get allowedPrefixesInput(): string[] | undefined;
    private _associatedGatewayId?;
    get associatedGatewayId(): string;
    set associatedGatewayId(value: string);
    resetAssociatedGatewayId(): void;
    get associatedGatewayIdInput(): string | undefined;
    private _associatedGatewayOwnerAccountId?;
    get associatedGatewayOwnerAccountId(): string;
    set associatedGatewayOwnerAccountId(value: string);
    resetAssociatedGatewayOwnerAccountId(): void;
    get associatedGatewayOwnerAccountIdInput(): string | undefined;
    get associatedGatewayType(): string;
    get dxGatewayAssociationId(): string;
    private _dxGatewayId;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    get dxGatewayIdInput(): string;
    get dxGatewayOwnerAccountId(): string;
    get id(): string;
    private _proposalId?;
    get proposalId(): string;
    set proposalId(value: string);
    resetProposalId(): void;
    get proposalIdInput(): string | undefined;
    private _vpnGatewayId?;
    get vpnGatewayId(): string;
    set vpnGatewayId(value: string);
    resetVpnGatewayId(): void;
    get vpnGatewayIdInput(): string | undefined;
    private _timeouts?;
    get timeouts(): DxGatewayAssociationTimeouts;
    set timeouts(value: DxGatewayAssociationTimeouts);
    resetTimeouts(): void;
    get timeoutsInput(): DxGatewayAssociationTimeouts | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
