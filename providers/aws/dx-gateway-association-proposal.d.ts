import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DxGatewayAssociationProposalConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html#allowed_prefixes DxGatewayAssociationProposal#allowed_prefixes}.
     */
    readonly allowedPrefixes?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html#associated_gateway_id DxGatewayAssociationProposal#associated_gateway_id}.
     */
    readonly associatedGatewayId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html#dx_gateway_id DxGatewayAssociationProposal#dx_gateway_id}.
     */
    readonly dxGatewayId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html#dx_gateway_owner_account_id DxGatewayAssociationProposal#dx_gateway_owner_account_id}.
     */
    readonly dxGatewayOwnerAccountId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html aws_dx_gateway_association_proposal}.
 */
export declare class DxGatewayAssociationProposal extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_gateway_association_proposal.html aws_dx_gateway_association_proposal} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DxGatewayAssociationProposalConfig);
    private _allowedPrefixes?;
    get allowedPrefixes(): string[];
    set allowedPrefixes(value: string[]);
    resetAllowedPrefixes(): void;
    get allowedPrefixesInput(): string[] | undefined;
    private _associatedGatewayId;
    get associatedGatewayId(): string;
    set associatedGatewayId(value: string);
    get associatedGatewayIdInput(): string;
    get associatedGatewayOwnerAccountId(): string;
    get associatedGatewayType(): string;
    private _dxGatewayId;
    get dxGatewayId(): string;
    set dxGatewayId(value: string);
    get dxGatewayIdInput(): string;
    private _dxGatewayOwnerAccountId;
    get dxGatewayOwnerAccountId(): string;
    set dxGatewayOwnerAccountId(value: string);
    get dxGatewayOwnerAccountIdInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
